<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Rádio Bom jesus</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet"
          type="text/css">
        <link rel="stylesheet" href="{{ asset('css/font-awesome.css') }}">

    </head>
    <body> 
        <div id="app">
            <App />
        </div>
    <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>