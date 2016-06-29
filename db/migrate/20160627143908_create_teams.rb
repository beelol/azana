class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.integer :author_id, null: false
      t.timestamps null: false
    end

    add_index :teams, :author_id
  end
end
