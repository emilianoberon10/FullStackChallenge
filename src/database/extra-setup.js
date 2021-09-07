function applyExtraSetup(sequelize) {
	const { user, budget } = sequelize.models;

	user.hasMany(budget);
	budget.belongsTo(user);
}

module.exports = { applyExtraSetup };
