class Api::TeamsController < ApplicationController
  def index
    # @teams = Team.all
    @teams = current_user_teams
    # fail
  end

  def create
    @team = Team.create!(team_params)

    render :show
  end

  def show
    @team = Team.find(params[:id])
  end

  def update
    @team = Team.find(params[:id])

    @team.update!(team_params)

    render :show
  end

  def destroy
    @team = Team.find(params[:id])

    @team.destroy

    render :index
  end

  def team_params
    params.require(:team).permit(:name, :id, :author_id)
  end
end
