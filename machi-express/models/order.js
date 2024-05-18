import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'CartItem',
    {
      order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, // 新增這一行
      },
      user_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_payment: {
        type: DataTypes.STRING(50),
      },
      order_username: {
        type: DataTypes.STRING(50),
      },
      order_address: {
        type: DataTypes.STRING(50),
      },
      order_phone: {
        type: DataTypes.INTEGER,
      },
      order_amount: {
        type: DataTypes.INTEGER,
      },
      order_total: {
        type: DataTypes.INTEGER,
      },
      order_status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
      order_createtime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: 'cart_item',
      timestamps: false,
      paranoid: false,
      underscored: true,
    }
  )
}
