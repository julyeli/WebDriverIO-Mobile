Feature: Search a item on ebay Website

    As a user of the ebay Website
    I Want search a item on the field 
    So That check the total number of items displayed

    Scenario Outline: As a user, I can log into the secure area
        Given I am on the page <WEBPAGE>
        When I type the text <WORD> on the field <FIELD>
        Then I should see the total number the items desplayed

    Examples:
      | WEBPAGE             | WORD        | FIELD                 |
      | index.html          | Pilas       | search                |
