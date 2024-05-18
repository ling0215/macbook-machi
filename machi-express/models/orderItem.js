import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'CartItem',
    {
      order_item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, // 新增這一行
      },
      order_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_produce_id: {
        type: DataTypes.INTEGER,
      },
      orde_produce_name: {
        type: DataTypes.STRING(50),
      },
      order_address: {
        type: DataTypes.STRING(50),
      },
      oorde_produce_type: {
        type: DataTypes.INTEGER,
      },
      order_produce_detail: {
        type: DataTypes.STRING(50),
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
