import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'CartItem',
    {
      cart_item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id_fk: {
        type: DataTypes.INTEGER,
      },
      product_name: {
        type: DataTypes.STRING,
      },
      product_subtitle: {
        type: DataTypes.STRING,
      },
      product_price: {
        type: DataTypes.DECIMAL(10, 2),
      },
      product_count: {
        type: DataTypes.INTEGER,
      },
      product_total: {
        type: DataTypes.DECIMAL(10, 2),
      },
      class_id_fk: {
        type: DataTypes.INTEGER,
      },
      class_name: {
        type: DataTypes.STRING,
      },
      class_price: {
        type: DataTypes.DECIMAL(10, 2),
      },
      class_count: {
        type: DataTypes.INTEGER,
      },
      class_total: {
        type: DataTypes.DECIMAL(10, 2),
      },
      custom_size: {
        type: DataTypes.STRING,
      },
      custom_layer: {
        type: DataTypes.STRING,
      },
      custom_flavor: {
        type: DataTypes.STRING,
      },
      custom_decor: {
        type: DataTypes.STRING,
      },
      custom_price: {
        type: DataTypes.DECIMAL(10, 2),
      },
      custom_count: {
        type: DataTypes.INTEGER,
      },
      custom_total: {
        type: DataTypes.DECIMAL(10, 2),
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
