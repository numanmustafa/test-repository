Feature: Browse module
    Scenario: Open subpage "Browse" - no variable
        Given user opens OneBlog
        When user navigates to Browse page
        Then user is on browse page

    Scenario: Open subpage "Browse" - test design with variable
        Given user opens OneBlog
        When user navigates to Browse page
        Then user is on "browse" page


    Scenario: Open subpage - test design with data table

        Given user opens OneBlog
        When user navigates to <title> page
        Then user is on "<url>" page

        Examples:
            | title   | url     |
            | Browse  | browse  |
            | Library | library |

    Scenario: User can filter default list by author
        Given user is on the browse page
        When user filters for author
        Then list is filtered for selected author







