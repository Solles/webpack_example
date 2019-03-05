<cfoutput>
<!doctype html>
<html>
	<head>
		<title>Webpack Example Application</title>
	</head>
	<body>
		<div
			id="main"
			style="border: 1px solid black"
			data-context="#encodeForHTMLAttribute(serializeJSON(rc.jsContext ?: structNew()))#"
		>
			#body#
		</div>
		<cfif rc.keyExists('entryJSPath')>
			<script src="#encodeForHTMLAttribute(rc.entryJSPath)#"></script>
		</cfif>
	</body>
</html>
</cfoutput>
