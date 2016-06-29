# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  team_id     :integer          not null
#  title       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ActiveRecord::Base
  belongs_to :team,
  primary_key: :id,
  foreign_key: :team_id,
  class_name: "Team"

  has_many :tasks,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: "Task"
end
