module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      company_id: DataTypes.INTEGER,
      order_date: DataTypes.DATE,
      order_details: DataTypes.TEXT,
      status: DataTypes.STRING(50),
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    });
  
    Order.associate = (models) => {
      Order.belongsTo(models.Company, { foreignKey: 'company_id' });
    };
  
    return Order;
  };
  