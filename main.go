// main.go
package main

import (
    "html/template"
    "log"
    "net/http"
    "path/filepath"
)

var tpl *template.Template

func init() {
    tpl = template.Must(template.ParseGlob("templates/*.html"))
}

func main() {
    fs := http.FileServer(http.Dir("static"))
    http.Handle("/static/", http.StripPrefix("/static/", fs))

    http.HandleFunc("/", indexHandler)
    http.HandleFunc("/login", loginHandler)
    http.HandleFunc("/register", registerHandler)
    http.HandleFunc("/dashboard", dashboardHandler)
    http.HandleFunc("/alphabet-game", alphabetGameHandler)
    http.HandleFunc("/date-roulette", dateRouletteHandler)

    log.Println("Server started on :8080")
    http.ListenAndServe(":8080", nil)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
    tpl.ExecuteTemplate(w, "index.html", nil)
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
    tpl.ExecuteTemplate(w, "login.html", nil)
}

func registerHandler(w http.ResponseWriter, r *http.Request) {
    tpl.ExecuteTemplate(w, "register.html", nil)
}

func dashboardHandler(w http.ResponseWriter, r *http.Request) {
    tpl.ExecuteTemplate(w, "dashboard.html", nil)
}

func alphabetGameHandler(w http.ResponseWriter, r *http.Request) {
    tpl.ExecuteTemplate(w, "alphabet_game.html", nil)
}

func dateRouletteHandler(w http.ResponseWriter, r *http.Request) {
    tpl.ExecuteTemplate(w, "date_roulette.html", nil)
}
