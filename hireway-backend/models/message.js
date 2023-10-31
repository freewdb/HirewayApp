module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      sender_id: DataTypes.INTEGER,
      receiver_id: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      timestamp: DataTypes.DATE,
      type: DataTypes.STRING(50)
      // Consider adding sender_type and receiver_type if needed
    });
  
    // You'll need to handle the associations for messages carefully due to the sender/receiver dynamics
  
    return Message;
  };
  