import { type AnnouncementObj } from "../components/layout/announcement";
import { GraphQLClient} from 'graphql-request';
import queries from './queries';

// Types for the API responses
interface ApiResponse<T> {
  data: T;
}

interface Image {
  id: string;
}

export interface Introduction {
  id: string;
  title: string;
  description: string;
}

export interface IntroSplashEntry {
  id: string;
  title: string;
  description: string;
  demo_image: Image;
  learn_more_link: string;
  featured_items: FeaturedItem[];
}




export interface FeaturedItem {
  id: string;
  type: number;
  image: Image;
  image_description: string;
  word_column_title: string;
  column_words: ColumnWord[]; 
  image_column_title: string;
  column_images: ColumnImage[];
}

export interface ColumnWord {
  word: string;
  url: string;
}

export interface ColumnImage {
  image: Image;
  word: string;
}

export interface WhyNetLogoEntry {
  title: string;
  content: string;
  icon: Image;
  order: number;
}

export interface GetNetLogoEntry {
  id: string;
  title: string;
  content: string;
  icon: Image;
  link: string;
  order: number;
}

export interface CommunityEntry {
  id: string;
  title: string;
  description: string;
  icon: Image;
  link: string;
  order: number;
  bordered: boolean;
}

export interface PartnerEntry {
  id: string;
  partner_name: string;
  partner_image: Image;
}

export interface NavigationSection {
  name: string;
  subsections: NavigationSubsection[];
}

export interface NavigationSubsection {
  title: string;
  display_title: boolean;
  items: NavigationItem[];
}

export interface NavigationItem {
  display_title: string;
  url: string;
  in_footer: boolean;
}

export interface ReferenceEntry {
  year: number;
  reference: string;
  is_ccl: boolean;
  //in_press: boolean;
}

export interface GroupedReference {
  year: number;
  references: string[];
}

export interface AllData {
  introduction: Introduction;
  intro_splash: IntroSplashEntry[];
  why_netlogo: WhyNetLogoEntry[];
  get_netlogo: GetNetLogoEntry[];
  community: CommunityEntry[];
  featured_partners: PartnerEntry[];
  announcement: AnnouncementObj;
}

class NetLogoAPI {
  private readonly baseUrl: string;
  private client: GraphQLClient;

  constructor(baseUrl: string = import.meta.env.PUBLIC_BACKEND_URL) {
    this.baseUrl = baseUrl;
    this.client = new GraphQLClient(this.baseUrl + '/graphql')
  }

  async fetchData<T>(endpoint: string): Promise<T> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: ApiResponse<T> = await response.json();
      return data.data;
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  }
  
  async graphqlFetchData<T>(query: string): Promise<T> {
    try {
      const data = await this.client.request<T>(query);
      return data;
    } catch (error) {
      console.error('GraphQL query error:', error);
      throw error;
    }
  }

  async getSiteData() {
    return await this.graphqlFetchData<AllData>(queries.allData);
  }

  async getReferences() {
    const references: {'References': ReferenceEntry[]} =  await this.graphqlFetchData<{'References': ReferenceEntry[]}>(queries.referenceData);


    // ***new fix stores is ccl and the refrence not jsut ref 
    let groupedReferences: Map<number, { reference: string; is_ccl: boolean }[]> = new Map();

    //let groupedReferences: Map<number, string[]> = new Map();

    // Loop through the references and group them by year
    references['References'].forEach((item) => {
      const year = item.year; // Convert year to string for the key
      
      // Check if the year already exists in the map
      if (!groupedReferences.has(year)) {
        // If not, create a new entry with an empty array
        groupedReferences.set(year, []);
      }
      //data is not consistent
      //indexing data that i cant work with it
      //how did i organize data from directus 
      //The issue is inconsistent data indexing or formatting when calling the getReferences() method and attempting to process or display the data. The line:
      //suggests that your grouped data may not be properly returned, consumed, or structured. 

      // add some console log stmts in the api and make sure it get the data how you expect the go to typesript file 
      



      // Push the reference into the array for that year
      //groupedReferences.get(year)?.push(item.reference);

      //***new fix 2: ensure that each reference is stored with the text and the is_ccl field proper rendering

      groupedReferences.get(year)?.push({
        reference: item.reference,
        is_ccl: item.is_ccl
      });
      
    })
    // *** new fix 3: return in coreect strucure 
    //console.log('Grouped References:', groupedReferences);
    //return groupedReferences;

    // *** new fix 4: make sure the data is formatted into the array shape your frontend expects
    const groupedArray = Array.from(groupedReferences.entries()).map(([year, refs]) => ({
      year,
      references: refs
    }));
    
    //console.log('Grouped References:', groupedArray);
    return groupedArray;
    

    

    //return references['References']
  }

  async getNavigationData() {
    return await this.graphqlFetchData<{navigation_sections:NavigationSection[]}>(queries.navigationData);
  }
}

export default NetLogoAPI;
