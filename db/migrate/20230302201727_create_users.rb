class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.string :user_name, null: false, default: '', index: { unique: true }
      t.string :email, null: false, default: '', index: { unique: true }
      t.string :password_digest, null: false, default: ''
       t.string :role, default: 'customer'

      t.timestamps
    end
  end
end
