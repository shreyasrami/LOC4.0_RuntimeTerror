from django.urls import path
from .views import CreateCrowdFunding, CreateFundingComment, GetFundingComment, GetFundingUpdate, NGOFundingDetails, CreateFundingUpdate

urlpatterns = [
    path('createCrowdFuding/', CreateCrowdFunding.as_view(),
         name="create_crowd_funding"),
    path('ngoFundingDetails/', NGOFundingDetails.as_view(),
         name='ngo_funding_details'),
    path('createFundingUpdate/', CreateFundingUpdate.as_view(),
         name='create_funding_update'),
    path('getFundingUpdate/', GetFundingUpdate.as_view(),
         name='get_funding_update'),
    path('createFundingComment/', CreateFundingComment.as_view(),
         name='create_funding_comment'),
    path('getFundingComment/', GetFundingComment.as_view(),
         name='get_funding_comment')
]
