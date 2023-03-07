const User = require('./User');
const StreamingServices = require('./StreamingServices');
const ApplicationDetails = require('./ApplicationDetails');


User.hasMany(ApplicationDetails, {
    foreignkey: 'user_id',
    onDelete: 'CASCADE'
});

Streaming_services.hasMany(ApplicationDetails, {
    foreignKey: 'Application_details_id',
    onDelete: 'CASCADE'
});

ApplicationDetails.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


module.exports = { User, ApplicationDetails, StreamingServices };

