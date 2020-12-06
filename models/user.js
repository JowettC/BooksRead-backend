module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
      username: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      password: DataTypes.STRING,
    });
  
    return Users;
  };