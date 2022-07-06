<?php // On utilise 4 lignes pour représenter les alcools (une ligne supplémentaire à cause de l'oxygène)
    require "chimie.php";
    $nombre = (int) $_POST["nombre"];
    $position = (int) $_POST["position"];
    $positionf = $nombre - $position;
?>


<div class="ligne-atome-dev"> 
    <?php // Ligne 1
        if ($nombre == 1){ // Cas particulier
            afficherAtomeDev("vide", false, false, false,false);
            afficherAtomeDev("hydrogene", false, false, true,false);
        }
        elseif ($nombre == 2){ // Cas particulier
            afficherAtomeDev("vide", false, false, false,false);
            afficherAtomeDev("hydrogene", false, false, true,false);
            afficherAtomeDev("hydrogene", false, false, true,false);
        }
        elseif ($nombre >= 3) { // cas général (plus de 2 carbones dans la chaîne)
            if ($position == 1) { // Cas particulier (la fonction est en début de chaîne)
                afficherAtomeDev("vide", false, false, false,false);
                afficherAtomeDev("hydrogene", false, false, true,false);
                for ($i = 0; $i <$nombre-1; $i++) {
                    afficherAtomeDev("hydrogene", false, false, true,false);
                }
            }
            /* On gère les cas où la position de la fonction dans la chaîne est inférieure à la moitié 
            du nombre de carbones*/
            elseif ($position >= 2 && $position < ceil($nombre/2)) {
                afficherAtomeDev("vide", false, false, false,false);
                afficherAtomeDev("hydrogene", false, false, true,false);
                for ($i=0; $i<$position-2; $i++) {
                    afficherAtomeDev("hydrogene", false, false, true,false);
                }
                afficherAtomeDev("hydrogene", false, false, true,false);
                for ($i=0; $i<$positionf; $i++) {
                    afficherAtomeDev("hydrogene", false, false, true,false);
                }      
            }
            /* On gère les cas où la position de la fonction dans la chaîne est supérieure ou égale à la moitié 
            du nombre de carbones et le cas où la fonction est au milieu de la chaîne.
            Quand on dépasse le milieu de la chaîne, on retouve les mêmes molécules que dans le cas précédent
            si on les fait pivoter de 180 degrés dans un même plan.
            On minimise donc le numéro de la fonction dans la chaîne quand on écrit le nom de la molécule. */
            elseif ($position >= ceil($nombre/2) && $positionf >= 1) {
                afficherAtomeDev("vide", false, false, false,false);
                afficherAtomeDev("hydrogene", false, false, true,false);
                for ($i=0; $i<$position-2; $i++) {
                    afficherAtomeDev("hydrogene", false, false, true,false);
                }
                afficherAtomeDev("hydrogene", false, false, true,false);
                for ($i=0; $i<$positionf; $i++) {
                    afficherAtomeDev("hydrogene", false, false, true,false);
                }       
            }
            /* Cas particulier [la fonction est en fin de chaîne 
                (équivalent au début de chaîne car on peut numéroter dans les 2 sens)]*/
            elseif ($position == $nombre) {
                afficherAtomeDev("vide", false, false, false,false);
                afficherAtomeDev("hydrogene", false, false, true,false);
                for ($i = 0; $i <$nombre-1; $i++) {
                    afficherAtomeDev("hydrogene", false, false, true,false);
                }
            }
        } 
    ?>
</div>

<div class="ligne-atome-dev">
    <?php // Ligne 2
        if ($nombre == 1){ // Cas particulier
            afficherAtomeDev("hydrogene", false, true, false,false);
            afficherAtomeDev("carbone", true, true, true, true);
            afficherAtomeDev("hydrogene", false, false, false,true);
        }
        else if ($nombre == 2){// Cas particulier
            afficherAtomeDev("hydrogene", false, true, false,false);
            afficherAtomeDev("carbone", true, true, true, true);
            afficherAtomeDev("carbone", true, true, true, true);
            afficherAtomeDev("hydrogene", false, false, false,true);
        }
        elseif ($nombre >= 3) { // cas général (plus de 2 carbones dans la chaîne)
            if ($position == 1) { // Cas particulier (la fonction est en début de chaîne)
                afficherAtomeDev("hydrogene", false, true, false,false);
                afficherAtomeDev("carbone");
                for ($i = 0; $i <$nombre-1; $i++) {
                    afficherAtomeDev("carbone", true, true, true, true);
                }
                afficherAtomeDev("hydrogene", false, false, false,true);
            }
            /* On gère les cas où la position de la fonction dans la chaîne est inférieure à la moitié 
            du nombre de carbones*/
            elseif ($position >= 2 && $position < ceil($nombre/2)) {
                afficherAtomeDev("hydrogene", false, true, false,false);
                afficherAtomeDev("carbone");
                for ($i=0; $i<$position-2; $i++) {
                    afficherAtomeDev("carbone", true, true, true, true);
                }
                afficherAtomeDev("carbone");
                for ($i=0; $i<$positionf; $i++) {
                    afficherAtomeDev("carbone",);
                }
                afficherAtomeDev("hydrogene", false, false, false,true);
            }
            /* On gère les cas où la position de la fonction dans la chaîne est supérieure ou égale à la moitié 
            du nombre de carbones et le cas où la fonction est au milieu de la chaîne.
            Quand on dépasse le milieu de la chaîne, on retouve les mêmes molécules que dans le cas précédent
            si on les fait pivoter de 180 degrés dans un même plan.
            On minimise donc le numéro de la fonction dans la chaîne quand on écrit le nom de la molécule. */
            elseif ($position >= ceil($nombre/2) && $positionf >= 1) {
                afficherAtomeDev("hydrogene", false, true, false,false);
                afficherAtomeDev("carbone");
                for ($i=0; $i<$positionf; $i++) {
                    afficherAtomeDev("carbone", true, true, true, true);
                }
                afficherAtomeDev("carbone");
                for ($i=0; $i<$position-2; $i++) {
                    afficherAtomeDev("carbone",);
                }
                afficherAtomeDev("hydrogene", false, false, false,true);
            }
            /* Cas particulier [la fonction est en fin de chaîne 
            (équivalent au début de chaîne car on peut numéroter dans les 2 sens)]*/
            elseif ($position == $nombre) {
                afficherAtomeDev("hydrogene", false, true, false,false);
                afficherAtomeDev("carbone");
                for ($i = 0; $i <$nombre-1; $i++) {
                    afficherAtomeDev("carbone", true, true, true, true);
                }
                afficherAtomeDev("hydrogene", false, false, false,true);
            }
        }
    ?>
</div>

<div class="ligne-atome-dev">
    <?php // Ligne 3
        if ($nombre == 1){ // Cas particulier
            afficherAtomeDev("vide", false, false, false,false);
            afficherAtomeDev("oxygene", true, false, true,false);
        }
        else if ($nombre == 2){ // Cas particulier
            afficherAtomeDev("vide", false, false, false,false);
            afficherAtomeDev("oxygene", true, false, true,false);
            afficherAtomeDev("hydrogene", true, false, false,false);
        }   
        elseif ($nombre >= 3) { // cas général (plus de 2 carbones dans la chaîne)
            if ($position == 1) { // Cas particulier (la fonction est en début de chaîne)
                afficherAtomeDev("vide", false, false, false,false);
                afficherAtomeDev("oxygene", true, false, true,false);
                for ($i=0; $i<$nombre-1; $i++) {
                    afficherAtomeDev("hydrogene", true, false, false, false);
                }
            }
            /* On gère les cas où la position de la fonction dans la chaîne est inférieure à la moitié 
            du nombre de carbones*/
            elseif ($position >= 2 && $position <= ceil($nombre/2)) {
                afficherAtomeDev("vide", false, false, false,false);
                for ($i=0; $i<$position-1; $i++) {
                    afficherAtomeDev("hydrogene", true, false, false, false);
                }
                afficherAtomeDev("oxygene", true, false, true,false);
                for ($i=0; $i<$positionf; $i++) {
                    afficherAtomeDev("hydrogene", true, false, false, false);
                }
            }
            /* On gère les cas où la position de la fonction dans la chaîne est supérieure ou égale à la moitié 
            du nombre de carbones et le cas où la fonction est au milieu de la chaîne.
            Quand on dépasse le milieu de la chaîne, on retouve les mêmes molécules que dans le cas précédent
            si on les fait pivoter de 180 degrés dans un même plan.
            On minimise donc le numéro de la fonction dans la chaîne quand on écrit le nom de la molécule. */
            elseif ($position > ceil($nombre/2) && $positionf >= 1) {
                afficherAtomeDev("vide", false, false, false,false);
                for ($i=0; $i<$positionf; $i++) {
                    afficherAtomeDev("hydrogene", true, false, false, false);
                }
                afficherAtomeDev("oxygene", true, false, true,false);
                for ($i=0; $i<$position-1; $i++) {
                    afficherAtomeDev("hydrogene", true, false, false, false);
                }
            }
            /* Cas particulier [la fonction est en fin de chaîne 
            (équivalent au début de chaîne car on peut numéroter dans les 2 sens)]*/
            elseif ($position == $nombre) {
                afficherAtomeDev("vide", false, false, false,false);
                afficherAtomeDev("oxygene", true, false, true,false);
                for ($i=0; $i<$nombre-1; $i++) {
                    afficherAtomeDev("hydrogene", true, false, false, false);
                }
            }
        }
    ?>
</div>

<div class="ligne-atome-dev">
    <?php // Ligne 4
        if ($nombre == 1){ // Cas particulier
            afficherAtomeDev("vide", false, false, false,false);
            afficherAtomeDev("hydrogene", true, false, false,false);
        }
        else if ($nombre == 2){ // Cas particulier
            afficherAtomeDev("vide", false, false, false,false);
            afficherAtomeDev("hydrogene", true, false, false,false);
        }   
        elseif ($nombre >= 3) { // cas général (plus de 2 carbones dans la chaîne)
            if ($position == 1) { // Cas particulier (la fonction est en début de chaîne)
                afficherAtomeDev("vide", false, false, false,false);
                afficherAtomeDev("hydrogene", true, false, false,false);
            }
            /* On gère les cas où la position de la fonction dans la chaîne est inférieure à la moitié 
            du nombre de carbones*/
            elseif ($position >= 2 && $position <= ceil($nombre/2)) {
                for ($i=0; $i<$position; $i++) {
                    afficherAtomeDev("vide", false, false, false,false);
                }
                afficherAtomeDev("hydrogene", true, false, false,false);
            }
            /* On gère les cas où la position de la fonction dans la chaîne est supérieure ou égale à la moitié 
            du nombre de carbones et le cas où la fonction est au milieu de la chaîne.
            Quand on dépasse le milieu de la chaîne, on retouve les mêmes molécules que dans le cas précédent
            si on les fait pivoter de 180 degrés dans un même plan.
            On minimise donc le numéro de la fonction dans la chaîne quand on écrit le nom de la molécule. */
            elseif ($position > ceil($nombre/2) && $positionf >= 1) {
                for ($i=0; $i<$positionf+1; $i++) {
                    afficherAtomeDev("vide", false, false, false,false);
                }
                afficherAtomeDev("hydrogene", true, false, false,false);
            }
            /* Cas particulier [la fonction est en fin de chaîne 
            (équivalent au début de chaîne car on peut numéroter dans les 2 sens)]*/
            elseif ($position == $nombre) {
                afficherAtomeDev("vide", false, false, false,false);
                afficherAtomeDev("hydrogene", true, false, false,false);
            }
        }
    ?>
</div>