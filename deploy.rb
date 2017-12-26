`rm ../tnp-rails3/public/justice/js2/main*.js`
`cp dist/main*.js ../tnp-rails3/public/justice/js2/`
# `rm ../tnp-rails3/public/justice/js2/vendor*.js`
# `cp dist/vendor*.js ../tnp-rails3/public/justice/js2/`
filename = `ls -1 ../tnp-rails3/public/justice/js2/main*`.chomp
if filename =~ /\.(\w+)\.bundle/
  hash = $1
  puts hash
  content = File.read('../tnp-rails3/app/views/questionnaires/show_score.html.erb')
  content = content.gsub(/main\.(\w+)\.bundle/, "main.#{hash}.bundle")
  File.open('../tnp-rails3/app/views/questionnaires/show_score.html.erb', 'w') do |f|
    f.write content
  end
end
jscontent = File.read(filename)
jscontent = jscontent.gsub('"assets/img/', '"/justice/assets/img/')
                     .gsub('n.p+"5268a6047603f423898f685058826422.png"', 'n.p+"/justice/5268a6047603f423898f685058826422.png"')
                     .gsub('n.p+"432cf775811900b3673bbca6c9597bb9.png"', 'n.p+"/justice/432cf775811900b3673bbca6c9597bb9.png"')
File.open(filename, 'w') do |f|
  f.write jscontent
end
