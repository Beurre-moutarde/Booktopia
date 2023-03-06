const User = require('./User');
const Netflix = require('./Netflix');
const AmazonPrime = require('./AmazonPrime');

User.hasOne(Netflix, {
    foreignkey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasOne(AmazonPrime, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Netflix.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

AmazonPrime.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Netflix, AmazonPrime };

