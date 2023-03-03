class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :image
      t.decimal :price
      t.text :description
      t.string :category

      t.timestamps
    end
  end
end
