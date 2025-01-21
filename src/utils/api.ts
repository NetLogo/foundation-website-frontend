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

export interface AllData {
  why_netlogo: WhyNetLogoEntry[];
  get_netlogo: GetNetLogoEntry[];
  community: CommunityEntry[];
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


  // Fetch all data at once
  async getAllData() {
    try {
      const [why_netlogo, community] = await Promise.all([this.getWhyNetLogoEntries(), this.getCommunityEntries()]);

      return {
        why_netlogo, community
      };
    } catch (error) {
      console.error("Error fetching all data:", error);
      throw error;
    }
  }
}

export default NetLogoAPI;
