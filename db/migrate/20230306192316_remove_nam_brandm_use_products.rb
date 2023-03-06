class RemoveNamBrandmUseProducts < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :brand, :string
  end
end
