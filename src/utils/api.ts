// Types for the API responses
interface ApiResponse<T> {
  data: T;
}

interface Announcement {
  // Add specific announcement properties here
  id: string;
  // ... other properties
}

interface Event {
  // Add specific event properties here
  id: string;
  // ... other properties
}

interface Workshop {
  // Add specific workshop properties here
  id: string;
  // ... other properties
}

interface Competition {
  // Add specific competition properties here
  id: string;
  // ... other properties
}

interface Publication {
  // Add specific publication properties here
  id: string;
  // ... other properties
}

export interface WhyNetLogoEntry {
  id: string;
  title: string;
  content: string;
  icon: string;
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

  async getAnnouncements(): Promise<Announcement[]> {
    return this.fetchData<Announcement[]>("/items/announcements");
  }

  async getUpcomingEvents(): Promise<Event[]> {
    return this.fetchData<Event[]>("/items/upcoming_events");
  }

  async getUpcomingWorkshops(): Promise<Workshop[]> {
    return this.fetchData<Workshop[]>("/items/upcoming_workshops");
  }

  async getCompetitions(): Promise<Competition[]> {
    return this.fetchData<Competition[]>("/items/competitions");
  }

  async getPublications(): Promise<Publication[]> {
    return this.fetchData<Publication[]>("/items/publications");
  }

  async getWhyNetLogoEntries(): Promise<WhyNetLogoEntry[]> {
    return this.fetchData<WhyNetLogoEntry[]>("/items/why_netlogo");
  }

  // Fetch all data at once
  async getAllData() {
    try {
      const [
        announcements,
        upcomingEvents,
        upcomingWorkshops,
        competitions,
        publications,
      ] = await Promise.all([
        this.getAnnouncements(),
        this.getUpcomingEvents(),
        this.getUpcomingWorkshops(),
        this.getCompetitions(),
        this.getPublications(),
      ]);

      return {
        announcements,
        upcomingEvents,
        upcomingWorkshops,
        competitions,
        publications,
      };
    } catch (error) {
      console.error("Error fetching all data:", error);
      throw error;
    }
  }
}

export default NetLogoAPI;
