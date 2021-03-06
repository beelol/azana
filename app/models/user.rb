class User < ActiveRecord::Base

	attr_reader :password

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

	after_initialize :ensure_session_token, :initialize_about

	# This line will may mess up when updating a user; get rid of it
	before_validation :ensure_session_token_uniqueness

  has_many :teams,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: "Team"

  has_many :tasks,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: "Task"

  has_many :projects,
  through: :teams,
  source: :projects
  after_initialize :ensure_session_token

	def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials username, password
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom::urlsafe_base64(16)
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

	def initialize_about
		self.about = ""
	end
end
