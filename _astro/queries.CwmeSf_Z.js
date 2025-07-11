const e=(o,...t)=>o.reduce((i,r,n)=>`${i}${r}${n in t?String(t[n]):""}`,""),a={introduction:e`
    query {
      introduction {
        title
        description
      }
    }
  `,introSplash:e`
    query GetIntroSplash {
      intro_splash {
        title
        description
        learn_more_link
        demo_image {
          id
        }
        featured_items {
          id
          image {
            id
          }
          type
          image_description
          column_title
          column_words {
            word
            url
          }
        }
      }
    }
  `,whyNetLogo:e`
    query GetWhyNetLogo {
      why_netlogo {
        id
        title
        content
        icon
        order
      }
    }
  `,getNetLogo:e`
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
  `,community:e`
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
  `,partners:e`
    query GetPartners {
      featured_partners {
        id
        partner_name
        partner_image
      }
    }
  `,contacts:e`
  query getContacts {
    contact_data {
      heading
      body
    }
  }
  `,mainAnnouncements:e`
  query getAnnouncements {
    announcements (sort: ["-date"]){
      title
      date
      content
    }
  }
`,referenceData:e`
  query getReferences {
    References(limit: -1) {
      year
      reference
      is_ccl
    }
  }
`,navigationData:e`
    query GetNavigation {
      navigation_sections {
        name
        items {
          display_title
          url
          in_footer
        }
      }
    }
  `,netLogoVersions:e`
    query GetNetLogoVersions {
      netlogo_versions {
        version
        download_links {
          platform
          download_url
        }
      }
    }
  `,resourcesData:e`
    query GetResources {
      resources {
        section_title
        section_content
      }
    }
  `,mainPageData:e`
    query GetAllData {
      introduction {
        title
        description
      }
      intro_splash {
        title

        description
        learn_more_link
        featured_items {
          id
          type
          image {
            id
          }
          image_description
          word_column_title
          column_words {
            word
            url
          }
          image_column_title
          column_images {
            image {
              id
            }
            word
          }
        }
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
        button_text
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
    }
  `,downloadPageData:e`
    query GetDownloadPageData {
      netlogo_versions {
        version
        download_links {
          platform
          download_url
        }
      }
      donation_data{
        title
        text
        image {
          id
        }
        url
      }
    }
  `,donationData:e`
    query GetDonationData {
      donation_data{
        title
        text
        image {
          id
        }
        url
      }
    }
  `};export{a as q};
