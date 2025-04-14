import { type AnnouncementObj } from "../components/layout/announcement";
import { GraphQLClient } from "graphql-request";
import queries from "./queries";
import { type FormData } from "../components/download/download-form";


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

export interface AllData {
  introduction: Introduction;
  intro_splash: IntroSplashEntry[];
  why_netlogo: WhyNetLogoEntry[];
  get_netlogo: GetNetLogoEntry[];
  community: CommunityEntry[];
  featured_partners: PartnerEntry[];
  announcement: AnnouncementObj;
}

export interface DownloadLink {
  platform: string;
  download_url: string;
}

export interface NetLogoVersion {
  version: string;
  download_links: DownloadLink[];
}

}

class NetLogoAPI {
  private readonly baseUrl: string;
  private client: GraphQLClient;

  constructor(baseUrl: string = import.meta.env.PUBLIC_BACKEND_URL) {
    this.baseUrl = baseUrl;
    this.client = new GraphQLClient(this.baseUrl + "/graphql");
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
      console.error("GraphQL query error:", error);
      throw error;
    }
  }

  async getMainPageData() {
    return await this.graphqlFetchData<AllData>(queries.mainPageData);
  }
  }

  async getNetLogoVersions() {
    return await this.graphqlFetchData<NetLogoVersion[]>(
      queries.netLogoVersions
    );
  }

  async getNavigationData() {
    return await this.graphqlFetchData<{
      navigation_sections: NavigationSection[];
    }>(queries.navigationData);
  }

  async sendDownloadForm(formData: FormData) {
    const url = this.baseUrl + "/items/download_responses"
    
    console.log("Sending form data to:", url);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    return response;
  }
}

export default NetLogoAPI;
