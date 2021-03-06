module Main exposing (..)

import Html exposing (..)
import Model exposing (Model, Msg)
import Update
import View

main : Program Never Model Msg
main =
  Html.program
    { init = Update.init
    , view = View.view
    , update = Update.update
    , subscriptions = Update.subscriptions
    }
