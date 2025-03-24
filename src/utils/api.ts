import { type AnnouncementObj } from "../components/layout/announcement";
import { GraphQLClient } from "graphql-request";
import queries from "./queries";
import { type FormData } from "../components/download/download-form";
import { createDirectus, rest, staticToken, createItem } from '@directus/sdk';


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
  icon: Image;
  description: string;
  demo_image: Image;
  background: boolean;
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

interface Schema {
  download_responses: FormData;
  // Add other collections if needed
}

class NetLogoAPI {
  private readonly baseUrl: string;
  private client: GraphQLClient;
  private directus;

  constructor(baseUrl: string = import.meta.env.PUBLIC_BACKEND_URL) {
    this.baseUrl = baseUrl;
    this.client = new GraphQLClient(this.baseUrl + "/graphql");
    this.directus = createDirectus<Schema>(baseUrl)
    .with(rest())
    .with(staticToken("token?"));
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

  async getSiteData() {
    return await this.graphqlFetchData<AllData>(queries.allData);
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
    

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    return response;
  }

  async sendDownloadData(formData: FormData) {
    try {
      // Convert FormData to a plain object
      const formObject: Record<string, any> = {};
      Object.entries(formData).forEach((value, key) => {
        formObject[key] = value;
      });
      
      // Use the SDK to create an item in your collection
      const response = await this.directus.request(
        createItem('download_responses', formObject)
      );
      
      return response;
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    }
  }
}

export default NetLogoAPI;
