<?php

/* Fonction qui génère des demi-liaisons simples dans le sens haut, droite, bas, gauche */
function afficherAtomeDev($atome, $haut = true, $droite = true, $bas = true, $gauche = true) {
    echo "<div class='atome-dev'>";
    if ($haut) {
        echo "<div class='liaison-haut'></div>";
    }
    if ($droite) {
        echo "<div class='liaison-droite'></div>";
    }
    if ($bas) {
        echo "<div class='liaison-bas'></div>";
    }
    if ($gauche) {
        echo "<div class='liaison-gauche'></div>";
    }
    echo "<div class='atome " . $atome . "'></div>";
    echo "</div>";
}

/* Fonction qui génère des demi-liaisons simples (haut, bas) et doubles (gauche, droite) */
function afficherAtomeLiaisondouble($atome, $haut = true, $droite = true, $bas = true, $gauche = true) {
    echo "<div class='atome-dev'>";
    if ($haut) {
        echo "<div class='liaison-haut'></div>";
    }
    if ($droite) {
        echo "<div class='liaison-droite-double'></div>";
    }
    if ($bas) {
        echo "<div class='liaison-bas'></div>";
    }
    if ($gauche) {
        echo "<div class='liaison-gauche-double'></div>";
    }
    echo "<div class='atome " . $atome . "'></div>";
    echo "</div>";
}

/* Fonction qui génère des demi-liaisons simples (haut, bas) et triples (gauche, droite) */
function afficherAtomeLiaisonTriple($atome, $haut = true, $droite = true, $bas = true, $gauche = true) {
    echo "<div class='atome-dev'>";
    if ($haut) {
        echo "<div class='liaison-haut'></div>";
    }
    if ($droite) {
        echo "<div class='liaison-droite-double-haut'></div>";
        echo "<div class='liaison-droite-double-bas'></div>";
    }
    if ($bas) {
        echo "<div class='liaison-bas'></div>";
    }
    if ($gauche) {
        echo "<div class='liaison-gauche-double-haut'></div>";
        echo "<div class='liaison-gauche-double-bas'></div>";
    }
    echo "<div class='atome " . $atome . "'></div>";
    echo "</div>";
}

/* Fonction qui génère des demi-liaisons simples (haut, droite, bas) et double (gauche) */
function afficherAtomeLiaisondoublesimple($atome, $haut = true, $droite = true, $bas = true, $gauche = true) {
    echo "<div class='atome-dev'>";
    if ($haut) {
        echo "<div class='liaison-haut'></div>";
    }
    if ($droite) {
        echo "<div class='liaison-droite'></div>";
    }
    if ($bas) {
        echo "<div class='liaison-bas'></div>";
    }
    if ($gauche) {
        echo "<div class='liaison-gauche-double'></div>";
    }
    echo "<div class='atome " . $atome . "'></div>";
    echo "</div>";
}

/* Fonction qui génère des demi-liaisons simples (haut, droite, bas) et triple (gauche) */
function afficherAtomeLiaisontriplesimple($atome, $haut = true, $droite = true, $bas = true, $gauche = true) {
    echo "<div class='atome-dev'>";
    if ($haut) {
        echo "<div class='liaison-haut'></div>";
    }
    if ($droite) {
        echo "<div class='liaison-droite'></div>";
    }
    if ($bas) {
        echo "<div class='liaison-bas'></div>";
    }
    if ($gauche) {
        echo "<div class='liaison-gauche-double-haut'></div>";
        echo "<div class='liaison-gauche-double-bas'></div>";
    }
    echo "<div class='atome " . $atome . "'></div>";
    echo "</div>";
}

/* Fonction qui génère des demi-liaisons simples (haut, bas, gauche) et double (droite) */
function afficherAtomeLiaisonsimpledouble($atome, $haut = true, $droite = true, $bas = true, $gauche = true) {
    echo "<div class='atome-dev'>";
    if ($haut) {
        echo "<div class='liaison-haut'></div>";
    }
    if ($droite) {
        echo "<div class='liaison-droite-double'></div>";
    }
    if ($bas) {
        echo "<div class='liaison-bas'></div>";
    }
    if ($gauche) {
        echo "<div class='liaison-gauche'></div>";
    }
    echo "<div class='atome " . $atome . "'></div>";
    echo "</div>";
}

/* Fonction qui génère des demi-liaisons simples (haut, bas, gauche) et triple (droite) */
function afficherAtomeLiaisonsimpletriple($atome, $haut = true, $droite = true, $bas = true, $gauche = true) {
    echo "<div class='atome-dev'>";
    if ($haut) {
        echo "<div class='liaison-haut'></div>";
    }
    if ($droite) {
        echo "<div class='liaison-droite-double-haut'></div>";
        echo "<div class='liaison-droite-double-bas'></div>";
    }
    if ($bas) {
        echo "<div class='liaison-bas'></div>";
    }
    if ($gauche) {
        echo "<div class='liaison-gauche'></div>";
    }
    echo "<div class='atome " . $atome . "'></div>";
    echo "</div>";
}

