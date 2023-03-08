const User = require('./User');
const StreamingServices = require('./StreamingServices');
const ApplicationDetails = require('./ApplicationDetails');


User.hasMany(ApplicationDetails, {
    foreignkey: 'user_id',
    onDelete: 'CASCADE'
});

ApplicationDetails.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});    

StreamingServices.hasMany(ApplicationDetails, {
    foreignKey: 'streaming_services_id',
    onDelete: 'CASCADE'
});

ApplicationDetails.hasOne(StreamingServices, {
    foreignKey: 'streaming_services_id',
    onDelete: 'CASCADE'
});

StreamingServices.belongsTo(ApplicationDetails, {
    foreignKey: 'applicationdetails_id',
    onDelete: 'CASCADE'
});


module.exports = { User, ApplicationDetails, StreamingServices };

