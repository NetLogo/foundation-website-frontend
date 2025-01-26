import { type AnnouncementObj } from "../components/layout/announcement";
// Types for the API responses
interface ApiResponse<T> {
  data: T;
}

export interface Introduction {
  id: string;
  title: string;
  description: string;
}

export interface IntroSplashEntry {
  id: string;
  title: string;
  icon: string;
  description: string;
  demo_image: string;
  background: boolean;
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

  constructor(baseUrl: string = import.meta.env.PUBLIC_BACKEND_URL) {
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
  async getIntroSplashEntries(): Promise<IntroSplashEntry[]> {
    return this.fetchData<IntroSplashEntry[]>("/items/intro_splash");
  }
  async getCommunityEntries(): Promise<CommunityEntry[]> {
    return this.fetchData<CommunityEntry[]>("/items/Community");
  }
  async getPartnerEntries(): Promise<PartnerEntry[]> {
    return this.fetchData<PartnerEntry[]>("/items/featured_partners");
  }
  async getAnnouncement(): Promise<AnnouncementObj> {
    return this.fetchData<AnnouncementObj>("/items/announcements");
  }

  // Fetch all data at once
  // only have to call function in index.astro
  //organizing all of it for us,
  async getAllData() {
    try {
      const [
        introduction,
        intro_splash,
        why_netlogo,
        get_netlogo,
        community,
        featured_partners,
        announcement,
      ] = await Promise.all([
        this.getIntro(),
        this.getIntroSplashEntries(),
        this.getWhyNetLogoEntries(),
        this.getGetNetLogoEntries(),
        this.getCommunityEntries(),
        this.getPartnerEntries(),
        this.getAnnouncement(),
      ]);

      return {
        introduction,
        intro_splash,
        why_netlogo,
        get_netlogo,
        community,
        featured_partners,
        announcement,
      };
    } catch (error) {
      console.error("Error fetching all data:", error);
      throw error;
    }
  }
}

export default NetLogoAPI;
