# Define the name of the source and target files based on the current buffer
SRC=$(shell basename `echo $(CURFILE)`)
TARGET=$(SRC:.tsx=.js)

# How to translate typescript files to javascript
%.js: %.tsx
	@npx tsc $<

# By default, make will run the first target so make it a phony target
all: $(TARGET)
	@node $(TARGET)

.PHONY: all
