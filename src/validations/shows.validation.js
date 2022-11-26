const Joi = require("joi");

const nextEpisodeSchema = Joi.object().keys({
    channel: Joi.string().allow(null, ""),
    channelLogo: Joi.string().uri().allow(null, ""),
    date: Joi.any().allow(null, ""),
    html: Joi.string().allow(null, ""),
    url: Joi.string().uri().allow(null, "")
}).allow(null);


const showSchema = Joi.object().keys({
    payload: Joi.array().items(Joi.object().keys({
        country: Joi.string(),
        description: Joi.string(),
        drm: Joi.boolean(),
        episodeCount: Joi.number().integer(),
        genre: Joi.string(),
        image: Joi.object().keys({
            showImage: Joi.string().uri()
        }),
        language: Joi.string(),
        nextEpisode: nextEpisodeSchema,
        primaryColour: Joi.string(),
        seasons: Joi.array().items(Joi.object().keys({
            slug: Joi.string()
        })).allow(null),
        slug: Joi.string(),
        title: Joi.string(),
        tvChannel: Joi.string()
    })),
    skip: Joi.number().integer(),
    take: Joi.number().integer(),
    totalRecords: Joi.number().integer()
});



module.exports = showSchema;