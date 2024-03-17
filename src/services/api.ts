import { HttpClient } from './service-layer/https-layer';
import { get as _get } from 'lodash';
import { Movie } from '../types/movie';

const httpsClient = HttpClient.getInstance();

export const getWeekTop10Movies = async (): Promise<Movie[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 'tt1462764',
          isAdult: false,
          canRateTitle: {
            isRatable: true,
          },
          originalTitleText: {
            text: 'Indiana Jones and the Dial of Destiny',
          },
          primaryImage: {
            id: 'rm1759389953',
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BZDQxMTY3NTAtMzYwYi00Y2U3LThkYmQtOTljY2I4ZmJiZGIzXkEyXkFqcGdeQXVyMTU1NzY5NTky._V1_.jpg',
            imageWidth: 1016,
            imageHeight: 1421,
          },
          ratingsSummary: {
            aggregateRating: 6.9,
            topRanking: {
              rank: 2805,
            },
            voteCount: 63643,
          },
          releaseYear: {
            year: 2023,
            endYear: null,
          },
          titleEpisode: null,
          titleText: {
            text: 'Indiana Jones and the Dial of Destiny',
          },
          titleType: {
            id: 'movie',
            text: 'Movie',
            displayableProperty: {
              value: {
                plainText: '',
              },
            },
            categories: [
              {
                id: 'movie',
                text: 'Movie',
                value: 'movie',
              },
            ],
            canHaveEpisodes: false,
            isSeries: false,
            isEpisode: false,
          },
          series: null,
          watchOptionsByCategory: {
            categorizedWatchOptionsList: [],
          },
          plot: {
            id: 'po1944051',
            author: null,
            plotText: {
              plainText:
                'Archaeologist Indiana Jones races against time to retrieve a legendary artifact that can change the course of history.',
            },
            correctionLink: {
              url: 'https://m.imdb.com/title/tt1462764/contribution/plot/po1944051/edit',
            },
            reportingLink: {
              url: 'https://m.imdb.com/title/tt1462764/contribution/plot/po1944051/report',
            },
          },
          releaseDate: {
            day: 30,
            month: 6,
            year: 2023,
            country: {
              id: 'US',
              text: 'United States',
            },
            restriction: null,
            releaseAttributes: [],
          },
          titleCertificate: {
            rating: 'PG-13',
            certificateCountry: {
              id: 'US',
              text: 'United States',
            },
            ratingReason:
              'Rated PG-13 for sequences of violence and action, language and smoking',
          },
          titleRuntime: {
            seconds: 9240,
            displayableProperty: {
              qualifiersInMarkdownList: null,
            },
          },
          chartMeterRanking: {
            currentRank: 1,
            rankChange: {
              changeDirection: 'UP',
              difference: 2,
            },
          },
        },
        {
          id: 'tt5180504',
          isAdult: false,
          canRateTitle: {
            isRatable: true,
          },
          originalTitleText: {
            text: 'The Witcher',
          },
          primaryImage: {
            id: 'rm1651977985',
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
            imageWidth: 1500,
            imageHeight: 2222,
          },
          ratingsSummary: {
            aggregateRating: 8.1,
            topRanking: {
              rank: 701,
            },
            voteCount: 530527,
          },
          releaseYear: {
            year: 2019,
            endYear: null,
          },
          titleEpisode: null,
          titleText: {
            text: 'The Witcher',
          },
          titleType: {
            id: 'tvSeries',
            text: 'TV Series',
            displayableProperty: {
              value: {
                plainText: 'TV Series',
              },
            },
            categories: [
              {
                id: 'tv',
                text: 'TV',
                value: 'tv',
              },
            ],
            canHaveEpisodes: true,
            isSeries: true,
            isEpisode: false,
          },
          series: null,
          watchOptionsByCategory: {
            categorizedWatchOptionsList: [
              {
                watchOptions: [
                  {
                    provider: {
                      id: 'amzn1.imdb.w2w.provider.netflix',
                      categoryType: 'SUBSCRIPTION',
                      description: {
                        value: 'with subscription',
                      },
                      name: {
                        value: 'Netflix',
                      },
                      refTagFragment: 'netflix',
                      logos: {
                        icon: {
                          url: 'https://m.media-amazon.com/images/M/f409199e-794d-4822-acf9-38bca16baa5e._V1_.png',
                          width: 500,
                          height: 500,
                        },
                        slate: {
                          url: 'https://m.media-amazon.com/images/M/9516b142-0c88-4475-a39b-97c06546cdc5._V1_.png',
                          width: 1280,
                          height: 720,
                        },
                      },
                    },
                    title: {
                      value: 'Watch on Netflix',
                    },
                    description: {
                      value: 'S1-3 with subscription',
                    },
                    shortDescription: {
                      value: 'S1-3',
                    },
                    link: 'https://www.netflix.com/watch/80189685?source=imdb',
                  },
                ],
              },
            ],
          },
          plot: {
            id: 'po2744457',
            author: null,
            plotText: {
              plainText:
                'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
            },
            correctionLink: {
              url: 'https://m.imdb.com/title/tt5180504/contribution/plot/po2744457/edit',
            },
            reportingLink: {
              url: 'https://m.imdb.com/title/tt5180504/contribution/plot/po2744457/report',
            },
          },
          releaseDate: {
            day: 20,
            month: 12,
            year: 2019,
            country: {
              id: 'US',
              text: 'United States',
            },
            restriction: null,
            releaseAttributes: [
              {
                text: 'internet',
              },
            ],
          },
          titleCertificate: {
            rating: 'TV-MA',
            certificateCountry: {
              id: 'US',
              text: 'United States',
            },
            ratingReason: null,
          },
          titleRuntime: {
            seconds: 3600,
            displayableProperty: {
              qualifiersInMarkdownList: null,
            },
          },
          chartMeterRanking: {
            currentRank: 2,
            rankChange: {
              changeDirection: 'UP',
              difference: 2,
            },
          },
        },
        {
          id: 'tt2085059',
          isAdult: false,
          canRateTitle: {
            isRatable: true,
          },
          originalTitleText: {
            text: 'Black Mirror',
          },
          primaryImage: {
            id: 'rm1448291329',
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BZTgyNTBkNzctN2I3NC00NTA1LWJiMDMtYzA2MmYyZjc1NWQzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
            imageWidth: 1080,
            imageHeight: 1350,
          },
          ratingsSummary: {
            aggregateRating: 8.7,
            topRanking: {
              rank: 72,
            },
            voteCount: 596757,
          },
          releaseYear: {
            year: 2011,
            endYear: null,
          },
          titleEpisode: null,
          titleText: {
            text: 'Black Mirror',
          },
          titleType: {
            id: 'tvSeries',
            text: 'TV Series',
            displayableProperty: {
              value: {
                plainText: 'TV Series',
              },
            },
            categories: [
              {
                id: 'tv',
                text: 'TV',
                value: 'tv',
              },
            ],
            canHaveEpisodes: true,
            isSeries: true,
            isEpisode: false,
          },
          series: null,
          watchOptionsByCategory: {
            categorizedWatchOptionsList: [
              {
                watchOptions: [
                  {
                    provider: {
                      id: 'amzn1.imdb.w2w.provider.netflix',
                      categoryType: 'SUBSCRIPTION',
                      description: {
                        value: 'with subscription',
                      },
                      name: {
                        value: 'Netflix',
                      },
                      refTagFragment: 'netflix',
                      logos: {
                        icon: {
                          url: 'https://m.media-amazon.com/images/M/f409199e-794d-4822-acf9-38bca16baa5e._V1_.png',
                          width: 500,
                          height: 500,
                        },
                        slate: {
                          url: 'https://m.media-amazon.com/images/M/9516b142-0c88-4475-a39b-97c06546cdc5._V1_.png',
                          width: 1280,
                          height: 720,
                        },
                      },
                    },
                    title: {
                      value: 'Watch on Netflix',
                    },
                    description: {
                      value: 'S1-6 with subscription',
                    },
                    shortDescription: {
                      value: 'S1-6',
                    },
                    link: 'https://www.netflix.com/watch/70264888?source=imdb',
                  },
                ],
              },
              {
                watchOptions: [
                  {
                    provider: {
                      id: 'amzn1.imdb.w2w.provider.prime_video',
                      categoryType: 'RENT_OR_BUY',
                      description: null,
                      name: {
                        value: 'Prime Video',
                      },
                      refTagFragment: 'pvt_aiv',
                      logos: {
                        icon: {
                          url: 'https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png',
                          width: 500,
                          height: 500,
                        },
                        slate: {
                          url: 'https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png',
                          width: 1280,
                          height: 720,
                        },
                      },
                    },
                    title: {
                      value: 'Watch on Prime Video',
                    },
                    description: {
                      value: 'buy from $4.99',
                    },
                    shortDescription: {
                      value: 'from $4.99',
                    },
                    link: 'aiv://aiv/view?gti=amzn1.dv.gti.a6b99352-6ed0-8b6b-d838-759c7398dc7d',
                  },
                ],
              },
            ],
          },
          plot: {
            id: 'po1913806',
            author: null,
            plotText: {
              plainText:
                "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
            },
            correctionLink: {
              url: 'https://m.imdb.com/title/tt2085059/contribution/plot/po1913806/edit',
            },
            reportingLink: {
              url: 'https://m.imdb.com/title/tt2085059/contribution/plot/po1913806/report',
            },
          },
          releaseDate: {
            day: 4,
            month: 12,
            year: 2011,
            country: {
              id: 'US',
              text: 'United States',
            },
            restriction: null,
            releaseAttributes: [
              {
                text: 'internet',
              },
            ],
          },
          titleCertificate: {
            rating: 'TV-MA',
            certificateCountry: {
              id: 'US',
              text: 'United States',
            },
            ratingReason: null,
          },
          titleRuntime: {
            seconds: 3600,
            displayableProperty: {
              qualifiersInMarkdownList: null,
            },
          },
          chartMeterRanking: {
            currentRank: 3,
            rankChange: {
              changeDirection: 'DOWN',
              difference: 2,
            },
          },
        },
        {
          id: 'tt14452776',
          isAdult: false,
          canRateTitle: {
            isRatable: true,
          },
          originalTitleText: {
            text: 'The Bear',
          },
          primaryImage: {
            id: 'rm866266369',
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BYmM4MjBkNGMtZjE5Zi00ZDMwLWE5MjYtN2M0MTM2YTQ2MmNlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
            imageWidth: 1944,
            imageHeight: 2880,
          },
          ratingsSummary: {
            aggregateRating: 8.5,
            topRanking: {
              rank: 268,
            },
            voteCount: 109721,
          },
          releaseYear: {
            year: 2022,
            endYear: null,
          },
          titleEpisode: null,
          titleText: {
            text: 'The Bear',
          },
          titleType: {
            id: 'tvSeries',
            text: 'TV Series',
            displayableProperty: {
              value: {
                plainText: 'TV Series',
              },
            },
            categories: [
              {
                id: 'tv',
                text: 'TV',
                value: 'tv',
              },
            ],
            canHaveEpisodes: true,
            isSeries: true,
            isEpisode: false,
          },
          series: null,
          watchOptionsByCategory: {
            categorizedWatchOptionsList: [
              {
                watchOptions: [
                  {
                    provider: {
                      id: 'amzn1.imdb.w2w.provider.hulu',
                      categoryType: 'SUBSCRIPTION',
                      description: {
                        value: 'on Hulu.com and the Hulu app',
                      },
                      name: {
                        value: 'Hulu',
                      },
                      refTagFragment: 'hulu',
                      logos: {
                        icon: {
                          url: 'https://m.media-amazon.com/images/M/454c994e-acf4-49ef-83d5-8fa06c8a5eab._V1_.png',
                          width: 512,
                          height: 512,
                        },
                        slate: {
                          url: 'https://m.media-amazon.com/images/M/67022a68-fde3-4078-8bd0-0ebc72efe8ad._V1_.png',
                          width: 1280,
                          height: 720,
                        },
                      },
                    },
                    title: {
                      value: 'Watch on Hulu',
                    },
                    description: {
                      value: 'S1-2 on Hulu.com and the Hulu app',
                    },
                    shortDescription: {
                      value: 'S1-2',
                    },
                    link: 'http://www.hulu.com?d=Amazon',
                  },
                ],
              },
            ],
          },
          plot: {
            id: 'po5830228',
            author: null,
            plotText: {
              plainText:
                "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop.",
            },
            correctionLink: {
              url: 'https://m.imdb.com/title/tt14452776/contribution/plot/po5830228/edit',
            },
            reportingLink: {
              url: 'https://m.imdb.com/title/tt14452776/contribution/plot/po5830228/report',
            },
          },
          releaseDate: {
            day: 23,
            month: 6,
            year: 2022,
            country: {
              id: 'US',
              text: 'United States',
            },
            restriction: null,
            releaseAttributes: [
              {
                text: 'internet',
              },
            ],
          },
          titleCertificate: {
            rating: 'TV-MA',
            certificateCountry: {
              id: 'US',
              text: 'United States',
            },
            ratingReason: null,
          },
          titleRuntime: {
            seconds: 1800,
            displayableProperty: {
              qualifiersInMarkdownList: null,
            },
          },
          chartMeterRanking: {
            currentRank: 4,
            rankChange: {
              changeDirection: 'DOWN',
              difference: 2,
            },
          },
        },
        {
          id: 'tt7599146',
          isAdult: false,
          canRateTitle: {
            isRatable: true,
          },
          originalTitleText: {
            text: 'Sound of Freedom',
          },
          primaryImage: {
            id: 'rm1045832449',
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BNTAwNWQ1ZjQtZDFmMC00YjNlLWFlNjItMjJlYzZkMjJlNzkyXkEyXkFqcGdeQXVyNzc0MTgzMzU@._V1_.jpg',
            imageWidth: 1080,
            imageHeight: 1600,
          },
          ratingsSummary: {
            aggregateRating: 8.6,
            topRanking: null,
            voteCount: 15693,
          },
          releaseYear: {
            year: 2023,
            endYear: null,
          },
          titleEpisode: null,
          titleText: {
            text: 'Sound of Freedom',
          },
          titleType: {
            id: 'movie',
            text: 'Movie',
            displayableProperty: {
              value: {
                plainText: '',
              },
            },
            categories: [
              {
                id: 'movie',
                text: 'Movie',
                value: 'movie',
              },
            ],
            canHaveEpisodes: false,
            isSeries: false,
            isEpisode: false,
          },
          series: null,
          watchOptionsByCategory: {
            categorizedWatchOptionsList: [],
          },
          plot: {
            id: 'po3587858',
            author: null,
            plotText: {
              plainText:
                'The incredible true story of a former government agent turned vigilante who embarks on a dangerous mission to rescue hundreds of children from sex traffickers.',
            },
            correctionLink: {
              url: 'https://m.imdb.com/title/tt7599146/contribution/plot/po3587858/edit',
            },
            reportingLink: {
              url: 'https://m.imdb.com/title/tt7599146/contribution/plot/po3587858/report',
            },
          },
          releaseDate: {
            day: 4,
            month: 7,
            year: 2023,
            country: {
              id: 'US',
              text: 'United States',
            },
            restriction: null,
            releaseAttributes: [],
          },
          titleCertificate: {
            rating: 'PG-13',
            certificateCountry: {
              id: 'US',
              text: 'United States',
            },
            ratingReason:
              'Rated PG-13 for thematic content involving sex trafficking, violence, language, sexual references, some drug references and smoking throughout',
          },
          titleRuntime: {
            seconds: 7860,
            displayableProperty: {
              qualifiersInMarkdownList: null,
            },
          },
          chartMeterRanking: {
            currentRank: 5,
            rankChange: {
              changeDirection: 'UP',
              difference: 53,
            },
          },
        },
        {
          id: 'tt14688458',
          isAdult: false,
          canRateTitle: {
            isRatable: true,
          },
          originalTitleText: {
            text: 'Silo',
          },
          primaryImage: {
            id: 'rm2521247489',
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BNTk3MGJkZGItNzRjYy00MDhiLWExMjUtOWU2Njc3YWRmOWE3XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
            imageWidth: 2000,
            imageHeight: 3000,
          },
          ratingsSummary: {
            aggregateRating: 8.1,
            topRanking: {
              rank: 627,
            },
            voteCount: 52873,
          },
          releaseYear: {
            year: 2023,
            endYear: null,
          },
          titleEpisode: null,
          titleText: {
            text: 'Silo',
          },
          titleType: {
            id: 'tvSeries',
            text: 'TV Series',
            displayableProperty: {
              value: {
                plainText: 'TV Series',
              },
            },
            categories: [
              {
                id: 'tv',
                text: 'TV',
                value: 'tv',
              },
            ],
            canHaveEpisodes: true,
            isSeries: true,
            isEpisode: false,
          },
          series: null,
          watchOptionsByCategory: {
            categorizedWatchOptionsList: [
              {
                watchOptions: [
                  {
                    provider: {
                      id: 'amzn1.imdb.w2w.provider.appletv',
                      categoryType: 'SUBSCRIPTION',
                      description: {
                        value: 'with subscription',
                      },
                      name: {
                        value: 'Apple TV+',
                      },
                      refTagFragment: 'appletv',
                      logos: {
                        icon: {
                          url: 'https://m.media-amazon.com/images/M/d2b632fd-044d-40de-a1c8-fc920e2f5d4d._V1_.png',
                          width: 500,
                          height: 500,
                        },
                        slate: {
                          url: 'https://m.media-amazon.com/images/M/2b1f9c41-9007-447c-9aec-663ad10f5805._V1_.png',
                          width: 1280,
                          height: 720,
                        },
                      },
                    },
                    title: {
                      value: 'Watch on Apple TV+',
                    },
                    description: {
                      value: 'S1 with subscription',
                    },
                    shortDescription: {
                      value: 'S1',
                    },
                    link: 'https://tv.apple.com',
                  },
                ],
              },
            ],
          },
          plot: {
            id: 'po6042333',
            author: null,
            plotText: {
              plainText:
                'Men and women live in a giant silo underground with several regulations which they believe are in place to protect them from the toxic and ruined world on the surface.',
            },
            correctionLink: {
              url: 'https://m.imdb.com/title/tt14688458/contribution/plot/po6042333/edit',
            },
            reportingLink: {
              url: 'https://m.imdb.com/title/tt14688458/contribution/plot/po6042333/report',
            },
          },
          releaseDate: {
            day: 5,
            month: 5,
            year: 2023,
            country: {
              id: 'US',
              text: 'United States',
            },
            restriction: null,
            releaseAttributes: [
              {
                text: 'internet',
              },
            ],
          },
          titleCertificate: {
            rating: 'TV-MA',
            certificateCountry: {
              id: 'US',
              text: 'United States',
            },
            ratingReason: null,
          },
          titleRuntime: null,
          chartMeterRanking: {
            currentRank: 6,
            rankChange: {
              changeDirection: 'UP',
              difference: 1,
            },
          },
        },
        {
          id: 'tt5057054',
          isAdult: false,
          canRateTitle: {
            isRatable: true,
          },
          originalTitleText: {
            text: 'Jack Ryan',
          },
          primaryImage: {
            id: 'rm4189003777',
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BODU0MmZjYjktOGQ4MS00N2QwLTk5MzQtYTRkMGRiM2Q4ZjViXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
            imageWidth: 2024,
            imageHeight: 3000,
          },
          ratingsSummary: {
            aggregateRating: 8,
            topRanking: {
              rank: 748,
            },
            voteCount: 154013,
          },
          releaseYear: {
            year: 2018,
            endYear: 2023,
          },
          titleEpisode: null,
          titleText: {
            text: "Tom Clancy's Jack Ryan",
          },
          titleType: {
            id: 'tvSeries',
            text: 'TV Series',
            displayableProperty: {
              value: {
                plainText: 'TV Series',
              },
            },
            categories: [
              {
                id: 'tv',
                text: 'TV',
                value: 'tv',
              },
            ],
            canHaveEpisodes: true,
            isSeries: true,
            isEpisode: false,
          },
          series: null,
          watchOptionsByCategory: {
            categorizedWatchOptionsList: [
              {
                watchOptions: [
                  {
                    provider: {
                      id: 'amzn1.imdb.w2w.provider.prime_video.PRIME',
                      categoryType: 'SUBSCRIPTION',
                      description: {
                        value: 'included with Prime',
                      },
                      name: {
                        value: 'Prime Video',
                      },
                      refTagFragment: 'pvs_piv',
                      logos: {
                        icon: {
                          url: 'https://m.media-amazon.com/images/M/e062ea53-945a-42cb-8d15-6405531687ec._V1_.png',
                          width: 500,
                          height: 500,
                        },
                        slate: {
                          url: 'https://m.media-amazon.com/images/M/75f35a85-7a6e-4f1f-bf8b-e4c8556bc4e4._V1_.png',
                          width: 1280,
                          height: 720,
                        },
                      },
                    },
                    title: {
                      value: 'Watch on Prime Video',
                    },
                    description: {
                      value: 'S1-4 included with Prime',
                    },
                    shortDescription: {
                      value: 'S1-4',
                    },
                    link: 'aiv://aiv/resume?gti=amzn1.dv.gti.3aae96d6-2f06-c508-8773-90cdfdce7e44',
                  },
                ],
              },
            ],
          },
          plot: {
            id: 'po2488882',
            author: null,
            plotText: {
              plainText:
                'Up-and-coming CIA analyst, Jack Ryan, is thrust into dangerous field assignments.',
            },
            correctionLink: {
              url: 'https://m.imdb.com/title/tt5057054/contribution/plot/po2488882/edit',
            },
            reportingLink: {
              url: 'https://m.imdb.com/title/tt5057054/contribution/plot/po2488882/report',
            },
          },
          releaseDate: {
            day: 31,
            month: 8,
            year: 2018,
            country: {
              id: 'US',
              text: 'United States',
            },
            restriction: null,
            releaseAttributes: [
              {
                text: 'internet',
              },
            ],
          },
          titleCertificate: {
            rating: 'TV-MA',
            certificateCountry: {
              id: 'US',
              text: 'United States',
            },
            ratingReason: null,
          },
          titleRuntime: {
            seconds: 3600,
            displayableProperty: {
              qualifiersInMarkdownList: null,
            },
          },
          chartMeterRanking: {
            currentRank: 7,
            rankChange: {
              changeDirection: 'UP',
              difference: 15,
            },
          },
        },
        {
          id: 'tt1517268',
          isAdult: false,
          canRateTitle: {
            isRatable: false,
          },
          originalTitleText: {
            text: 'Barbie',
          },
          primaryImage: {
            id: 'rm2419599361',
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BOWIwZGY0OTYtZjUzYy00NzRmLTg5YzgtYWMzNWQ0MmZiY2MwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
            imageWidth: 2764,
            imageHeight: 4096,
          },
          ratingsSummary: {
            aggregateRating: null,
            topRanking: null,
            voteCount: 0,
          },
          releaseYear: {
            year: 2023,
            endYear: null,
          },
          titleEpisode: null,
          titleText: {
            text: 'Barbie',
          },
          titleType: {
            id: 'movie',
            text: 'Movie',
            displayableProperty: {
              value: {
                plainText: '',
              },
            },
            categories: [
              {
                id: 'movie',
                text: 'Movie',
                value: 'movie',
              },
            ],
            canHaveEpisodes: false,
            isSeries: false,
            isEpisode: false,
          },
          series: null,
          watchOptionsByCategory: {
            categorizedWatchOptionsList: [],
          },
          plot: {
            id: 'po6848414',
            author: null,
            plotText: {
              plainText:
                'Barbie suffers a crisis that leads her to question her world and her existence.',
            },
            correctionLink: {
              url: 'https://m.imdb.com/title/tt1517268/contribution/plot/po6848414/edit',
            },
            reportingLink: {
              url: 'https://m.imdb.com/title/tt1517268/contribution/plot/po6848414/report',
            },
          },
          releaseDate: {
            day: 21,
            month: 7,
            year: 2023,
            country: {
              id: 'US',
              text: 'United States',
            },
            restriction: null,
            releaseAttributes: [],
          },
          titleCertificate: {
            rating: 'PG-13',
            certificateCountry: {
              id: 'US',
              text: 'United States',
            },
            ratingReason:
              'Rated PG-13 for suggestive references and brief language.',
          },
          titleRuntime: {
            seconds: 6840,
            displayableProperty: {
              qualifiersInMarkdownList: null,
            },
          },
          chartMeterRanking: {
            currentRank: 8,
            rankChange: {
              changeDirection: 'UP',
              difference: 9,
            },
          },
        },
        {
          id: 'tt14954666',
          isAdult: false,
          canRateTitle: {
            isRatable: true,
          },
          originalTitleText: {
            text: 'The Idol',
          },
          primaryImage: {
            id: 'rm2467113985',
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BYzU3YmMwYjItYzQ0My00YjYzLThlZjItNTdmNjY5ZTZjNWY5XkEyXkFqcGdeQXVyMTY1MTU0NzEz._V1_.jpg',
            imageWidth: 768,
            imageHeight: 1138,
          },
          ratingsSummary: {
            aggregateRating: 4.8,
            topRanking: {
              rank: 1957,
            },
            voteCount: 65027,
          },
          releaseYear: {
            year: 2023,
            endYear: 2023,
          },
          titleEpisode: null,
          titleText: {
            text: 'The Idol',
          },
          titleType: {
            id: 'tvSeries',
            text: 'TV Series',
            displayableProperty: {
              value: {
                plainText: 'TV Series',
              },
            },
            categories: [
              {
                id: 'tv',
                text: 'TV',
                value: 'tv',
              },
            ],
            canHaveEpisodes: true,
            isSeries: true,
            isEpisode: false,
          },
          series: null,
          watchOptionsByCategory: {
            categorizedWatchOptionsList: [
              {
                watchOptions: [
                  {
                    provider: {
                      id: 'amzn1.imdb.w2w.provider.prime_video.hbomaxus',
                      categoryType: 'SUBSCRIPTION',
                      description: {
                        value: 'with Prime Video Channels',
                      },
                      name: {
                        value: 'Max',
                      },
                      refTagFragment: 'hbomax',
                      logos: {
                        icon: {
                          url: 'https://m.media-amazon.com/images/M/3968ed0f-31d9-48fe-b4a2-8a69d0e1cc4b._V1_.png',
                          width: 500,
                          height: 500,
                        },
                        slate: {
                          url: 'https://m.media-amazon.com/images/M/7cdcbf4e-6afe-4136-be75-cd6f2d237c63._V1_.png',
                          width: 1280,
                          height: 720,
                        },
                      },
                    },
                    title: {
                      value: 'Watch on Max',
                    },
                    description: {
                      value: 'S1 with Prime Video Channels',
                    },
                    shortDescription: {
                      value: 'S1',
                    },
                    link: 'aiv://aiv/view?gti=amzn1.dv.gti.cbd96cc5-3676-4ec6-999e-d8d80285cdd7',
                  },
                  {
                    provider: {
                      id: 'amzn1.imdb.w2w.provider.hbo_max',
                      categoryType: 'SUBSCRIPTION',
                      description: {
                        value: 'with subscription',
                      },
                      name: {
                        value: 'Max',
                      },
                      refTagFragment: 'hbomax',
                      logos: {
                        icon: {
                          url: 'https://m.media-amazon.com/images/M/7660eee6-3846-43e9-aadd-bff7846554fb._V1_.png',
                          width: 500,
                          height: 500,
                        },
                        slate: {
                          url: 'https://m.media-amazon.com/images/M/609ae2bb-6e79-45ae-bd76-75da3afac406._V1_.png',
                          width: 1280,
                          height: 720,
                        },
                      },
                    },
                    title: {
                      value: 'Watch on Max',
                    },
                    description: {
                      value: 'S1 with subscription',
                    },
                    shortDescription: {
                      value: 'S1',
                    },
                    link: 'https://play.max.com/show/8893abd5-1a33-477b-94e4-20329e2d37ef',
                  },
                ],
              },
              {
                watchOptions: [
                  {
                    provider: {
                      id: 'amzn1.imdb.w2w.provider.prime_video',
                      categoryType: 'RENT_OR_BUY',
                      description: null,
                      name: {
                        value: 'Prime Video',
                      },
                      refTagFragment: 'pvt_aiv',
                      logos: {
                        icon: {
                          url: 'https://m.media-amazon.com/images/M/4c192978-331f-429e-9c97-02d5ed9d436e._V1_.png',
                          width: 500,
                          height: 500,
                        },
                        slate: {
                          url: 'https://m.media-amazon.com/images/M/b63dfed5-e4fa-434c-be14-d2dc2b60fbae._V1_.png',
                          width: 1280,
                          height: 720,
                        },
                      },
                    },
                    title: {
                      value: 'Watch on Prime Video',
                    },
                    description: {
                      value: 'buy from $12.99',
                    },
                    shortDescription: {
                      value: 'from $12.99',
                    },
                    link: 'aiv://aiv/view?gti=amzn1.dv.gti.a9061168-fcdd-47e0-93c9-1ac1903bef83',
                  },
                ],
              },
            ],
          },
          plot: {
            id: 'po7327635',
            author: null,
            plotText: {
              plainText:
                'Jocelyn is desperate to reclaim her rightful title as the greatest and sexiest pop diva in America after a nervous breakdown disrupted her most recent tour after Tedros, a notorious nightclub entrepreneur, reignites her passions.',
            },
            correctionLink: {
              url: 'https://m.imdb.com/title/tt14954666/contribution/plot/po7327635/edit',
            },
            reportingLink: {
              url: 'https://m.imdb.com/title/tt14954666/contribution/plot/po7327635/report',
            },
          },
          releaseDate: {
            day: 4,
            month: 6,
            year: 2023,
            country: {
              id: 'US',
              text: 'United States',
            },
            restriction: null,
            releaseAttributes: [],
          },
          titleCertificate: {
            rating: 'TV-MA',
            certificateCountry: {
              id: 'US',
              text: 'United States',
            },
            ratingReason: null,
          },
          titleRuntime: {
            seconds: 16560,
            displayableProperty: {
              qualifiersInMarkdownList: null,
            },
          },
          chartMeterRanking: {
            currentRank: 9,
            rankChange: {
              changeDirection: 'FLAT',
              difference: 0,
            },
          },
        },
        {
          id: 'tt13157618',
          isAdult: false,
          canRateTitle: {
            isRatable: true,
          },
          originalTitleText: {
            text: 'Secret Invasion',
          },
          primaryImage: {
            id: 'rm4049477889',
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BM2FlYzVmNWQtNzE4ZS00OTMwLTlhYTUtZDY0YTEyZTRlZDlkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
            imageWidth: 1688,
            imageHeight: 2500,
          },
          ratingsSummary: {
            aggregateRating: 6.8,
            topRanking: {
              rank: 1685,
            },
            voteCount: 15898,
          },
          releaseYear: {
            year: 2023,
            endYear: 2023,
          },
          titleEpisode: null,
          titleText: {
            text: 'Secret Invasion',
          },
          titleType: {
            id: 'tvMiniSeries',
            text: 'TV Mini Series',
            displayableProperty: {
              value: {
                plainText: 'TV Mini Series',
              },
            },
            categories: [
              {
                id: 'tv',
                text: 'TV',
                value: 'tv',
              },
            ],
            canHaveEpisodes: true,
            isSeries: true,
            isEpisode: false,
          },
          series: null,
          watchOptionsByCategory: {
            categorizedWatchOptionsList: [],
          },
          plot: {
            id: 'po5462592',
            author: null,
            plotText: {
              plainText:
                'Fury and Talos try to stop the Skrulls who have infiltrated the highest spheres of the Marvel Universe.',
            },
            correctionLink: {
              url: 'https://m.imdb.com/title/tt13157618/contribution/plot/po5462592/edit',
            },
            reportingLink: {
              url: 'https://m.imdb.com/title/tt13157618/contribution/plot/po5462592/report',
            },
          },
          releaseDate: {
            day: 21,
            month: 6,
            year: 2023,
            country: {
              id: 'US',
              text: 'United States',
            },
            restriction: null,
            releaseAttributes: [
              {
                text: 'internet',
              },
            ],
          },
          titleCertificate: {
            rating: 'TV-14',
            certificateCountry: {
              id: 'US',
              text: 'United States',
            },
            ratingReason: null,
          },
          titleRuntime: null,
          chartMeterRanking: {
            currentRank: 10,
            rankChange: {
              changeDirection: 'DOWN',
              difference: 4,
            },
          },
        },
      ]);
    }, 1000);
    // httpsClient
    //   .get('getWeekTop10')
    //   .then(response => {
    //     const movies = _get(response, 'data.data', []);
    //     resolve(movies);
    //   })
    //   .catch(error => {
    //     reject(error);
    //   });
  });
};
