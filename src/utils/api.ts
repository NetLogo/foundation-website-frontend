// Types for the API responses
interface ApiResponse<T> {
  data: T;
}

export interface Introduction {
  id: string;
  title: string;
  description: string;
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

export interface AllData {
  introduction: Introduction;
  why_netlogo: WhyNetLogoEntry[];
  get_netlogo: GetNetLogoEntry[];
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

  async getIntro(): Promise<Introduction> {
    return this.fetchData<Introduction>("/items/introduction");
  }



  // Fetch all data at once
  async getAllData() {
    try {
      const [introduction, why_netlogo, get_netlogo] = await Promise.all([this.getIntro(), this.getWhyNetLogoEntries(), this.getGetNetLogoEntries()]);

      return {
        introduction,
        why_netlogo,
        get_netlogo,
      };
    } catch (error) {
      console.error("Error fetching all data:", error);
      throw error;
    }
  }
}

export default NetLogoAPI;
