import { gql } from "graphql-request";

const queries = {
  introduction: gql`
    query {
      introduction {
        title
        description
      }
    }
  `,

  introSplash: gql`
    query GetIntroSplash {
      intro_splash {
        id
        title
        icon
        description
        demo_image
        background
      }
    }
  `,

  whyNetLogo: gql`
    query GetWhyNetLogo {
      why_netlogo {
        id
        title
        content
        icon
        order
      }
    }
  `,

  getNetLogo: gql`
    query GetGetNetLogo {
      get_netlogo {
        id
        title
        content
        icon
        link
        order
      }
    }
  `,

  community: gql`
    query GetCommunity {
      community {
        id
        Title
        Description
        Icon
        Link
        order
        Bordered
      }
    }
  `,

  partners: gql`
    query GetPartners {
      featured_partners {
        id
        partner_name
        partner_image
      }
    }
  `,

  announcement: gql`
    query GetAnnouncement {
      announcement {
        id
        title
        content
        active
        type
      }
    }
  `,

  navigationData: gql`
    query GetNavigation {
      navigation_sections {
        name
        subsections {
          title
          display_title
          items {
            display_title
            url
            in_footer
          }
        }
      }
    }
  `,

  netLogoVersions: gql`
    query GetNetLogoVersions {
      netlogo_versions {
        version
        download_links {
          platform
          download_url
        }
      }
    }
  `,

  allData: gql`
    query GetAllData {
      introduction {
        title
        description
      }
      intro_splash {
        title
        icon {
          id
        }
        description
        demo_image {
          id
        }
        background
      }
      why_netlogo {
        title
        content
        icon {
          id
        }
      }
      get_netlogo {
        title
        content
        icon {
          id
        }
        link
      }
      community {
        title
        description
        icon {
          id
        }
        link
      }
      featured_partners {
        partner_name
        partner_image {
          id
        }
      }
      announcements {
        title
        content
      }
    }
  `,
};

export default queries;
