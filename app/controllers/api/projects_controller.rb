class Api::ProjectsController < ApplicationController
  def index
    # @projects = Project.all
    teams = current_user_teams

    @projects = Project.where(team: teams)
  end

  def create
    @project = Project.create!(project_params)

    render :show
  end

  def show
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])

    @project.update!(project_params)

    render :show
  end

  def destroy
    @project = Project.find(params[:id])

    @project.destroy

    render :index
  end

  def project_params
    params.require(:project).permit(:title, :description, :team_id)
  end
end
