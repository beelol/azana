# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ActiveRecord::Base
  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: "User"

  has_many :projects,
  primary_key: :id,
  foreign_key: :team_id,
  class_name: "Project"

  has_many :tasks,
  through: :projects,
  source: :tasks
end
