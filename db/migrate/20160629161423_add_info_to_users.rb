class AddInfoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :department, :string
    add_column :users, :about, :string
  end
end
