class Survey1Controller < ApplicationController
  def show
    @questionnaire = Questionnaire.new
  end

  def create
    @questionnaire = Questionnaire.new(questionnaire_params)
    if @questionnaire.save
      redirect_to action: "done"
    else
      render action: "show"
    end
  end

  private def questionnaire_params
    params.require(:questionnaire).permit(
      :name, :language, :other_language
    )
  end

  def done
  end
end
