
--LIST VRP VIEWS...
SELECT	name
FROM	sys.views
WHERE	name LIKE 'VRP%'
ORDER BY 1;

--LIST VRP COLUMNS...
SELECT	V.NAME AS 'VIEWNAME', 
	C.name AS 'COLUMNNAME'
FROM	sys.columns C INNER JOIN sys.views V ON C.object_id = V.object_id
WHERE	V.name LIKE 'VRP%'
ORDER BY V.name, C.name ;

