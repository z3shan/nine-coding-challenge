const showSchema = require("../validations/shows.validation");
const getShowsList = (req, res, next) => {
    try {
        const {body} = req;
        showSchema.validate(body);
        const data = [];
        for (const show of body.payload) {
            if (show.drm && show.episodeCount > 0) {
                data.push({
                    image: show.image,
                    slug: show.slug,
                    title: show.title

                });
            }
        }
        return res.status(200).json({response: data});
    } catch (err) {
        next(err);
    }

};

module.exports = {
    getShowsList,
};