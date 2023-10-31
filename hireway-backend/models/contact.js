module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define('Contact', {
      company_id: DataTypes.INTEGER,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING(15),
      position: DataTypes.STRING,
      status: DataTypes.STRING(50),
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    });
  
    Contact.associate = (models) => {
      Contact.belongsTo(models.Company, { foreignKey: 'company_id' });
    };
  
    return Contact;
  };
  