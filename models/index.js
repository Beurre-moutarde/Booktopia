const User = require('./User');
const StreamingServices = require('./StreamingServices');
const ApplicationDetails = require('./ApplicationDetails');


User.hasMany(ApplicationDetails, {
    foreignkey: 'user_id',
    onDelete: 'CASCADE'
});

StreamingServices.hasMany(ApplicationDetails, {
    foreignKey: 'application_details_id',
    onDelete: 'CASCADE'
});

ApplicationDetails.hasOne(StreamingServices, {
    foreignKey: 'application_details_id'
})
ApplicationDetails.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


module.exports = { User, ApplicationDetails, StreamingServices };

