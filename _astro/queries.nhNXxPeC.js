const t=(i,...e)=>i.reduce((o,r,n)=>`${o}${r}${n in e?String(e[n]):""}`,""),a={introduction:t`
    query {
      introduction {
        title
        description
      }
    }
  `,introSplash:t`
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
  `,whyNetLogo:t`
    query GetWhyNetLogo {
      why_netlogo {
        id
        title
        content
        icon
        order
      }
    }
  `,getNetLogo:t`
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
  `,community:t`
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
  `,partners:t`
    query GetPartners {
      featured_partners {
        id
        partner_name
        partner_image
      }
    }
  `,announcement:t`
    query GetAnnouncement {
      announcement {
        id
        title
        content
        active
        type
      }
    }
  `,navigationData:t`
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
  `,netLogoVersions:t`
    query GetNetLogoVersions {
      netlogo_versions {
        version
        download_links {
          platform
          download_url
        }
      }
    }
  `,mainPageData:t`
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
  `,downloadPageData:t`
    query GetDownloadPageData {
      netlogo_versions {
        version
        download_links {
          platform
          download_url
        }
      }
      donation_section {
        title
        text
        image {
          id
        }
        url
      }
    }
  `,donationTestData:t`
    query GetDonationTestData {
      donation_test_entries {
        title
        text
        image {
          id
        }
        url
      }
    }
  `};export{a as q};
