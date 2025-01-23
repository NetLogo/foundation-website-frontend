// Types for the API responses
interface ApiResponse<T> {
  data: T;
}

export interface Introduction {
  id: string;
  title: string;
  content: string;
}

export interface WhyNetLogoEntry {
  id: string;
  title: string;
  content: string;
  icon: string;
  order: number;
}

export interface GetNetLogoEntry {
  id: string;
  title: string;
  content: string;
  icon: string;
  link: string;
  order: number;
}

export interface CommunityPost {
  id: string;
  title: string;
  content: string;
  icon: string;
  link: string;
  order: number;
}

export interface CommunityEntry {
  id: string;
  Title: string;
  Description: string;
  Icon: string;
  Link: string;
  order: number;
  Bordered: boolean;
}

export interface PartnerEntry {
  id: string;
  partner_name: string;
  partner_image: string;
}

// after makeing directus 
// creating a option type for featured partners, and what to expect in it and know what you are fetching


export interface AllData {
  why_netlogo: WhyNetLogoEntry[];
  //get_netlogo: GetNetLogoEntry[];
  community: CommunityEntry[];
  featured_partners: PartnerEntry[];
}

class NetLogoAPI {
  private readonly baseUrl: string;

  constructor(baseUrl: string = "https://backend.netlogo.org") {
    this.baseUrl = baseUrl;
  }

  private async fetchData<T>(endpoint: string): Promise<T> {
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

  async getWhyNetLogoEntries(): Promise<WhyNetLogoEntry[]> {
    return this.fetchData<WhyNetLogoEntry[]>("/items/why_netlogo");
  }
  async getGetNetLogoEntries(): Promise<GetNetLogoEntry[]> {
    return this.fetchData<GetNetLogoEntry[]>("/items/get_netlogo");
  }

  async getCommunityEntries(): Promise<CommunityEntry[]> {
    return this.fetchData<CommunityEntry[]>("/items/Community");

  
  }
// add fetch info partners,get specifally that endpoint
// get specifally the data

  async getPartnerEntries(): Promise<PartnerEntry[]> {
    return this.fetchData<PartnerEntry[]>("/items/featured_partners");

  }


  // Fetch all data at once
  // only have to call function in index.astro
  //organizing all of it for us, 
  async getAllData() {
    try {
      const [why_netlogo, community, featured_partners] = await Promise.all([this.getWhyNetLogoEntries(), this.getCommunityEntries(), this.getPartnerEntries()]);

      return {
        why_netlogo, community, featured_partners
      };
    } catch (error) {
      console.error("Error fetching all data:", error);
      throw error;
    }
  }
}

export default NetLogoAPI;
