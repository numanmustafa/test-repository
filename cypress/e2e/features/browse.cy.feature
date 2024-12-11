Feature: Browse module





    Scenario: Open subpage "Browse"
        Given user opens OneBlog
        When user navigates to Browse page
        Then user is on browse page

    Scenario: Open subpage "Browse"
        Given user opens OneBlog
        When user navigates to Browse page
        Then user is on "browse" page

    Scenario: Open subpage "Library"
        Given user opens OneBlog
        When user navigates to Library page
        Then user is on "library" page


    Scenario: Open subpage

        Given user opens OneBlog
        When user navigates to <title> page
        Then user is on "<url>" page

        Examples:
            | title   | url     |
            | Browse  | browse  |
            | Library | library |





