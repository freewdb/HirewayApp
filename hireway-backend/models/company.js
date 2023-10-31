module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
      name: DataTypes.STRING,
      address: DataTypes.TEXT,
      phone: DataTypes.STRING(15),
      website: DataTypes.STRING,
      sector: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    });
  
    Company.associate = (models) => {
      Company.hasMany(models.Order, { foreignKey: 'company_id' });
      Company.belongsToMany(models.Candidate, { through: 'company_candidates' });
      Company.hasMany(models.Contact, { foreignKey: 'company_id' });
      // For messages, you might need additional logic to handle sender/receiver distinction
    };
  
    return Company;
  };
  