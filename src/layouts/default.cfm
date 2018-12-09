<cfoutput>
<!doctype html>
<html>
	<head>
		<title>Webpack Example Application</title>
	</head>
	<body>
		This is from the layout.
		#body#
		<cfif rc.keyExists('entryJSPath')>
			<script src="#encodeForHTMLAttribute(rc.entryJSPath)#"></script>
		</cfif>
	</body>
</html>
</cfoutput>
