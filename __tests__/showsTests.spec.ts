const request = require("supertest");
const app = require("../src/app");


describe('Nine Entertainment Shows Listing Tests', () => {

    describe('POST /', () => {
        // happy path unit tests
        describe('given a valid payload', () => {

            it('should respond with a 200 status code', async () => {
                const response = await request(app).post('/').send({
                    payload: [
                        {
                            country: "UK",
                            description: "What's life like when you have enough children to field your own football team?",
                            drm: true,
                            episodeCount: 3,
                            genre: "Reality",
                            image: {
                                showImage: "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
                            },
                            language: "English",
                            nextEpisode: null,
                            primaryColour: "#ff7800",
                            seasons: [
                                {
                                    slug: "show/16kidsandcounting/season/1"
                                }
                            ],
                            slug: "show/16kidsandcounting",
                            title: "16 Kids and Counting",
                            tvChannel: "GEM"
                        }
                    ],
                    skip: 0,
                    take: 10,
                    totalRecords: 75
                })
                expect(response.statusCode).toBe(200);
            });

            it('should specify json in the content type header', async () => {
                const response = await request(app).post('/').send({
                    payload: [
                        {
                            country: "UK",
                            description: "What's life like when you have enough children to field your own football team?",
                            drm: true,
                            episodeCount: 3,
                            genre: "Reality",
                            image: {
                                showImage: "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
                            },
                            language: "English",
                            nextEpisode: null,
                            primaryColour: "#ff7800",
                            seasons: [
                                {
                                    slug: "show/16kidsandcounting/season/1"
                                }
                            ],
                            slug: "show/16kidsandcounting",
                            title: "16 Kids and Counting",
                            tvChannel: "GEM"
                        }
                    ],
                    skip: 0,
                    take: 10,
                    totalRecords: 75
                })
                expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
            });

            it('response object should have response "array" in it', async () => {
                const response = await request(app).post('/').send({
                    payload: [
                        {
                            country: "UK",
                            description: "What's life like when you have enough children to field your own football team?",
                            drm: true,
                            episodeCount: 3,
                            genre: "Reality",
                            image: {
                                showImage: "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
                            },
                            language: "English",
                            nextEpisode: null,
                            primaryColour: "#ff7800",
                            seasons: [
                                {
                                    slug: "show/16kidsandcounting/season/1"
                                }
                            ],
                            slug: "show/16kidsandcounting",
                            title: "16 Kids and Counting",
                            tvChannel: "GEM"
                        }
                    ],
                    skip: 0,
                    take: 10,
                    totalRecords: 75
                });
               expect(response.body.response).toBeDefined();
            });

        })

        // sad path unit tests
        describe('given an invalid payload', () => {

            it('should respond with a status code of 400 if request body is empty', async () => {
                const response = await request(app).post('/').send({});
                expect(response.statusCode).toBe(400);
            });

            it('should respond with a status code of 400 if request body does not have payload in it', async () => {
                const response = await request(app).post('/').send({
                    skip: 0,
                    take: 10,
                    totalRecords: 75
                })
                expect(response.statusCode).toBe(400);
            });

        })


    })

})