<?php
require_once 'conf.php';

if ($conn) {
    echo "Database connection successful to " . $conf['db_name'];
}
