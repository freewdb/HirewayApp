module.exports = (sequelize, DataTypes) => {
    const Candidate = sequelize.define('Candidate', {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING(15),
      address: DataTypes.TEXT,
      skills: DataTypes.TEXT,
      experience: DataTypes.INTEGER,
      education: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    });
  
    Candidate.associate = (models) => {
      Candidate.belongsToMany(models.Company, { through: 'company_candidates' });
      // For messages, you might need additional logic to handle sender/receiver distinction
    };
  
    return Candidate;
  };
  